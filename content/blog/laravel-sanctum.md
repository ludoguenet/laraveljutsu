---
title: "Laravel Sanctum Authentication with Cookies: A Complete Guide"
description: "Learn how to implement secure cookie-based authentication in Laravel using Sanctum for Single Page Applications (SPAs). Complete tutorial with error handling and troubleshooting."
date: "2025-07-04"
author: "Ludovic Guénet"
---

## Introduction

As modern web applications increasingly adopt Single Page Application (SPA) architectures, implementing secure authentication becomes crucial. Laravel Sanctum provides an elegant solution for SPA authentication using cookies, offering better security than traditional token-based approaches. This comprehensive guide will walk you through creating an API application with Laravel and implementing authentication using Sanctum with cookies.

## What is Cookie-Based Authentication?

Cookie-based authentication leverages HTTP-only cookies to store session information securely. Unlike tokens stored in localStorage or sessionStorage, HTTP-only cookies cannot be accessed by JavaScript, making them inherently more secure against XSS attacks.

Laravel Sanctum's cookie-based authentication is specifically designed for SPAs where the frontend and backend share the same top-level domain, providing seamless authentication without exposing sensitive tokens to client-side JavaScript.

## Why Choose Cookie-Based Authentication Over Tokens?

### Security Advantages
- **XSS Protection**: HTTP-only cookies are inaccessible to JavaScript, preventing token theft through XSS attacks
- **Automatic Management**: Browsers handle cookie storage and transmission automatically
- **Session Security**: Laravel's built-in session management provides additional security layers

### Developer Experience Benefits
- **Seamless Integration**: Works naturally with Laravel's existing authentication system
- **No Token Management**: No need to manually handle token storage, refresh, or expiration
- **Built-in CSRF Protection**: Leverages Laravel's CSRF protection mechanisms

## Setting Up a New Laravel Project

Let's start by creating a fresh Laravel application optimized for API development:

```bash
laravel new sanctum-api
cd sanctum-api
```

When prompted, select "No Starter Kit" as we'll configure everything manually to understand the complete process.

## Installing and Configuring Sanctum

### Step 1: Install Sanctum API

In Laravel 11+, Sanctum isn't included by default. Install it using Laravel's built-in command:

```bash
php artisan install:api
```

This command performs several crucial setup tasks:
- Installs Laravel Sanctum package
- Creates the `routes/api.php` file with proper middleware
- Configures Sanctum middleware in `bootstrap/app.php`
- Registers API routes with the application

### Step 2: Configure Stateful API

For cookie-based authentication, configure the stateful API in `bootstrap/app.php`:

```php
<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->statefulApi();
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
```

The `statefulApi()` middleware enables cookie-based authentication for your API routes.

### Step 3: Configure Sanctum Settings

Edit `config/sanctum.php` to add consistent API prefixing:

```php
<?php

return [
    'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
        '%s%s',
        'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000,::1',
        Sanctum::currentApplicationUrlWithPort()
    ))),

    'guard' => ['web'],

    'expiration' => null,

    'token_retrieval_request' => false,

    'prefix' => 'api',

    'middleware' => [
        'authenticate_session' => Laravel\Sanctum\Http\Middleware\AuthenticateSession::class,
        'encrypt_cookies' => App\Http\Middleware\EncryptCookies::class,
        'validate_csrf_token' => App\Http\Middleware\VerifyCsrfToken::class,
    ],
];
```

The `prefix` configuration ensures all API routes are consistently prefixed with `/api`.

### Step 4: Configure Frontend Domain

In your `.env` file, specify your frontend domain(s):

```env
SANCTUM_STATEFUL_DOMAINS=localhost:3000,127.0.0.1:3000
```

**Critical Configuration Notes:**
- **No Protocol**: Don't include `http://` or `https://`
- **No Trailing Slashes**: Avoid adding slashes at the beginning or end
- **Port Specification**: Include ports if your frontend runs on non-standard ports
- **Domain Matching**: Frontend and backend must share the same top-level domain

For production environments:
```env
SANCTUM_STATEFUL_DOMAINS=myapp.com,api.myapp.com
```

## Creating the Authentication System

### Step 1: Generate Authentication Controller

Create a dedicated controller for authentication logic:

```bash
php artisan make:controller AuthController
```

### Step 2: Implement Login Logic

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    /**
     * Authenticate user and create session.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     */
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        if (Auth::attempt($credentials)) {
            // Regenerate session ID for security
            $request->session()->regenerate();

            return response()->json([
                'message' => 'Authentication successful',
                'user' => Auth::user(),
            ]);
        }

        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    /**
     * Logout user and invalidate session.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request): JsonResponse
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logged out successfully',
        ]);
    }

    /**
     * Get authenticated user information.
     *
     * @return JsonResponse
     */
    public function user(): JsonResponse
    {
        return response()->json([
            'user' => Auth::user(),
        ]);
    }
}
```

### Step 3: Register Authentication Routes

In `routes/api.php`, add your authentication routes:

```php
<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login'])
        ->name('auth.login');

    Route::post('logout', [AuthController::class, 'logout'])
        ->middleware('auth:sanctum')
        ->name('auth.logout');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', [AuthController::class, 'user'])
        ->name('auth.user');
});
```

## Setting Up Test Data

Create test data for authentication testing:

```bash
php artisan db:seed
```

This creates a default user with:
- **Email**: `test@example.com`
- **Password**: `password`

For custom test data, modify `database/seeders/DatabaseSeeder.php`:

```php
<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
```

## Testing Authentication Flow

### Understanding the Authentication Process

The cookie-based authentication flow follows these steps:

1. **CSRF Cookie Request**: Get CSRF token from Laravel
2. **Login Request**: Authenticate with credentials and CSRF token
3. **Authenticated Requests**: Use session cookies for subsequent requests

### Step 1: Get CSRF Cookie

Before any authenticated requests, obtain the CSRF cookie:

```http
GET /api/sanctum/csrf-cookie
Accept: application/json
Origin: localhost
```

**Response**: Sets HTTP-only cookies including `XSRF-TOKEN` and `laravel_session`.

### Step 2: Extract CSRF Token

From the response cookies, extract the `XSRF-TOKEN` value. Remove any URL encoding (e.g., `%3D` becomes `=`).

### Step 3: Login Request

```http
POST /api/auth/login
Content-Type: application/json
Accept: application/json
Origin: localhost
X-XSRF-TOKEN: [extracted-token-value]

{
    "email": "test@example.com",
    "password": "password"
}
```

**Successful Response**:
```json
{
    "message": "Authentication successful",
    "user": {
        "id": 1,
        "name": "Test User",
        "email": "test@example.com",
        "email_verified_at": null,
        "created_at": "2025-01-04T10:00:00.000000Z",
        "updated_at": "2025-01-04T10:00:00.000000Z"
    }
}
```

### Step 4: Access Protected Routes

```http
GET /api/user
Accept: application/json
X-XSRF-TOKEN: [token-from-cookies]
```

The browser automatically includes session cookies, maintaining authentication state.

## Common Errors and Solutions

### Error 1: "Session store not set on request"

**Symptoms**: 500 error with session-related error message

**Root Cause**: The `statefulApi()` middleware requires either `Origin` or `Referer` headers to determine if the request comes from a valid frontend domain.

**Solution**: Include the `Origin` header in your requests:
```http
Origin: localhost
```

**Code Analysis**: The middleware checks `config/sanctum.php` stateful domains against request headers to enable session handling.

### Error 2: "CSRF token mismatch" (419 Error)

**Symptoms**: 419 Unprocessable Entity with CSRF error message

**Root Cause**: Missing or invalid CSRF token in request headers.

**Solution Checklist**:
1. **Get CSRF Cookie First**: Always call `/api/sanctum/csrf-cookie` before authentication
2. **Extract Token Correctly**: Remove URL encoding from cookie value
3. **Include Header**: Add `X-XSRF-TOKEN` header to all state-changing requests
4. **Check Cookie Expiration**: CSRF tokens expire with sessions

**Example Fix**:
```http
# First request
GET /api/sanctum/csrf-cookie

# Extract XSRF-TOKEN from cookies, then:
POST /api/auth/login
X-XSRF-TOKEN: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

### Error 3: "Unauthenticated" (401 Error)

**Symptoms**: 401 Unauthorized when accessing protected routes

**Root Cause Analysis**:
- **Missing Cookies**: Session cookies not included in request
- **Invalid Session**: Session expired or invalidated
- **Wrong Domain**: Frontend domain doesn't match configured stateful domains

**Solution Steps**:
1. **Verify Cookies**: Ensure session cookies are present in requests
2. **Check Domain Configuration**: Verify `SANCTUM_STATEFUL_DOMAINS` matches your frontend
3. **Re-authenticate**: Login again if session expired

### Error 4: "Preflight wildcard origin not allowed"

**Symptoms**: CORS error during preflight requests

**Root Cause**: Using wildcard `*` origins with credentials

**Solution**: Configure specific origins in `config/cors.php`:
```php
'allowed_origins' => [
    'http://localhost:3000',
    'https://myapp.com',
],
'supports_credentials' => true,
```

## Advanced CORS Configuration

### Publishing CORS Configuration

```bash
php artisan config:publish cors
```

### Complete CORS Setup

Configure `config/cors.php` for cookie-based authentication:

```php
<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        // Add your production domains
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true, // CRITICAL for cookies
];
```

**Critical CORS Settings**:
- **`supports_credentials: true`**: Essential for cookie transmission
- **Specific Origins**: Never use `*` with credentials
- **Include Sanctum Path**: Ensure CSRF cookie endpoint is covered

## Frontend Integration Examples

### Axios Configuration

```javascript
// axios.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

// Request interceptor to include CSRF token
api.interceptors.request.use((config) => {
    const token = getCsrfToken();
    if (token) {
        config.headers['X-XSRF-TOKEN'] = token;
    }
    return config;
});

function getCsrfToken() {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith('XSRF-TOKEN='))
        ?.split('=')[1];
}

export default api;
```

### Vue.js Authentication Service

```javascript
// authService.js
import api from './axios';

export class AuthService {
    async login(credentials) {
        // Get CSRF cookie first
        await api.get('/sanctum/csrf-cookie');

        // Authenticate
        const response = await api.post('/auth/login', credentials);
        return response.data;
    }

    async logout() {
        const response = await api.post('/auth/logout');
        return response.data;
    }

    async getUser() {
        const response = await api.get('/user');
        return response.data;
    }
}
```

### React Authentication Hook

```javascript
// useAuth.js
import { useState, useEffect } from 'react';
import api from './axios';

export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await api.get('/user');
            setUser(response.data.user);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        await api.get('/sanctum/csrf-cookie');
        const response = await api.post('/auth/login', credentials);
        setUser(response.data.user);
        return response.data;
    };

    const logout = async () => {
        await api.post('/auth/logout');
        setUser(null);
    };

    return { user, loading, login, logout };
}
```

## Security Best Practices

### 1. Session Management

```php
// In AuthController
public function login(Request $request): JsonResponse
{
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required', 'string'],
    ]);

    if (Auth::attempt($credentials)) {
        // Always regenerate session ID after authentication
        $request->session()->regenerate();

        return response()->json([
            'message' => 'Authentication successful',
            'user' => Auth::user(),
        ]);
    }

    throw ValidationException::withMessages([
        'email' => ['The provided credentials are incorrect.'],
    ]);
}
```

### 2. Environment Configuration

```env
# .env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://myapp.com

# Cookie Security
SESSION_SECURE_COOKIE=true
SESSION_SAME_SITE=lax

# Sanctum Configuration
SANCTUM_STATEFUL_DOMAINS=myapp.com,app.myapp.com
```

### 3. Rate Limiting

```php
// In RouteServiceProvider or routes/api.php
Route::middleware(['throttle:auth'])->group(function () {
    Route::post('auth/login', [AuthController::class, 'login']);
});
```

Configure rate limiting in `config/sanctum.php`:
```php
'middleware' => [
    'throttle:auth' => \Illuminate\Routing\Middleware\ThrottleRequests::class.':60,1',
],
```

### 4. HTTPS Enforcement

```php
// In AppServiceProvider
public function boot(): void
{
    if ($this->app->environment('production')) {
        URL::forceScheme('https');
    }
}
```

## Testing Authentication

### Feature Tests

```php
<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_login_with_correct_credentials(): void
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
        ]);

        $response = $this->post('/api/auth/login', [
            'email' => 'test@example.com',
            'password' => 'password',
        ]);

        $response->assertStatus(200)
                 ->assertJson([
                     'message' => 'Authentication successful',
                 ]);

        $this->assertAuthenticatedAs($user);
    }

    public function test_user_cannot_login_with_incorrect_credentials(): void
    {
        User::factory()->create([
            'email' => 'test@example.com',
        ]);

        $response = $this->post('/api/auth/login', [
            'email' => 'test@example.com',
            'password' => 'wrong-password',
        ]);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['email']);

        $this->assertGuest();
    }

    public function test_authenticated_user_can_logout(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
                         ->post('/api/auth/logout');

        $response->assertStatus(200)
                 ->assertJson([
                     'message' => 'Logged out successfully',
                 ]);

        $this->assertGuest();
    }
}
```

### Unit Tests

```php
<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_login_validates_required_fields(): void
    {
        $response = $this->post('/api/auth/login', []);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['email', 'password']);
    }

    public function test_login_validates_email_format(): void
    {
        $response = $this->post('/api/auth/login', [
            'email' => 'invalid-email',
            'password' => 'password',
        ]);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['email']);
    }
}
```

## Production Deployment Checklist

### Environment Configuration
- [ ] Set `APP_ENV=production`
- [ ] Disable `APP_DEBUG`
- [ ] Configure `APP_URL` with production domain
- [ ] Set `SESSION_SECURE_COOKIE=true`
- [ ] Configure `SANCTUM_STATEFUL_DOMAINS` with production domains

### Security Hardening
- [ ] Enable HTTPS across all environments
- [ ] Configure rate limiting for authentication endpoints
- [ ] Set up proper CORS configuration
- [ ] Implement CSP headers for additional XSS protection
- [ ] Configure secure session settings

### Performance Optimization
- [ ] Enable session caching (Redis/Memcached)
- [ ] Configure session garbage collection
- [ ] Set up proper logging for authentication events
- [ ] Monitor authentication failure rates

## Troubleshooting Checklist

When authentication isn't working, check these items in order:

### 1. Basic Configuration
- [ ] Sanctum installed via `php artisan install:api`
- [ ] `statefulApi()` middleware configured
- [ ] Frontend domain added to `SANCTUM_STATEFUL_DOMAINS`

### 2. Request Headers
- [ ] `Accept: application/json` header included
- [ ] `Origin` header matches configured domain
- [ ] `X-XSRF-TOKEN` header included in state-changing requests

### 3. CSRF Flow
- [ ] CSRF cookie obtained before authentication
- [ ] Token extracted correctly from cookies
- [ ] Token included in subsequent requests

### 4. CORS Configuration
- [ ] `supports_credentials` set to `true`
- [ ] Specific origins configured (no wildcards)
- [ ] All necessary paths included

### 5. Session Management
- [ ] Session driver properly configured
- [ ] Session cookies being set and transmitted
- [ ] Session not expired or invalidated

## Conclusion

Laravel Sanctum's cookie-based authentication provides a robust, secure solution for SPA authentication. By leveraging HTTP-only cookies and Laravel's built-in session management, you can implement authentication that is both secure and developer-friendly.

The key to successful implementation lies in understanding the complete authentication flow: obtaining CSRF tokens, properly configuring CORS, and ensuring consistent header inclusion across all requests. With proper configuration and error handling, Sanctum's cookie-based authentication becomes a powerful tool for modern web applications.

Remember to always test your authentication flow thoroughly, implement proper security measures for production, and keep your Laravel and Sanctum packages updated to benefit from the latest security improvements.

## Resources

- [Laravel Sanctum Documentation](https://laravel.com/docs/sanctum)
- [Laravel Session Configuration](https://laravel.com/docs/session)
- [CORS Configuration Guide](https://laravel.com/docs/routing#cors)
- [Laravel Testing Documentation](https://laravel.com/docs/testing)
- [PHP 8.3 Release Notes](https://www.php.net/releases/8.3/en.php)
- [MDN Web Docs: HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
