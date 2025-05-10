---
title: Writing Effective Cursor Rules for Laravel/PHP Projects
description: Learn how to create effective Cursor Rules for Laravel/PHP projects that improve code quality, enforce architectural patterns, and enhance developer productivity.
date: 2024-03-27
author: Ludovic Guénet
---

## Introduction

As modern PHP and Laravel applications grow in complexity, maintaining code consistency and quality becomes increasingly challenging. Cursor Rules provide an elegant solution to this problem by guiding AI-assisted development with precise, project-specific patterns and constraints. This article explores how to create effective Cursor Rules for Laravel/PHP projects that improve code quality, enforce architectural patterns, and enhance developer productivity.

## What Are Cursor Rules?

Cursor Rules are a set of instructions that help AI development assistants understand the patterns, best practices, and constraints specific to your project. They act as guardrails to ensure AI-generated code follows your team's standards and architectural decisions.

A well-crafted Cursor Rules file dramatically improves the quality and consistency of AI-generated code, reducing the need for manual corrections and ensuring adherence to project-specific patterns.

## Why Laravel Projects Need Cursor Rules

Laravel's flexibility is both a strength and a challenge. While it allows developers to implement various architectural patterns, this flexibility can lead to inconsistency across a codebase without proper guidelines. Cursor Rules help by:

1. **Enforcing architectural decisions** - Whether you're using Repository, Service, Action patterns, or a combination
2. **Ensuring type safety** - Particularly important with PHP 8.x's improved type system
3. **Maintaining consistent naming conventions** - Critical for readability and developer onboarding
4. **Promoting best practices** - From dependency injection to testing methodologies

## Key Elements of Effective Laravel Cursor Rules

### 1. Project Overview and High-Level Guidelines

Begin with a clear, concise description of your project and its architectural approach. This provides crucial context for AI to understand your system's purpose and constraints.

```markdown
## Project Overview

This is a multi-establishment hospital scheduling and leave management system built with Laravel 12. The system handles:
- Role-based access control via Spatie Permissions
- Specialized handling for different medical professions
- Automated leave allocation
- Dynamic schedule management
- Calendar interface with room reservation logic

## High-Level Guidelines

- Use PHP 8.2+ features where appropriate
- Follow Laravel 12 conventions and best practices
- Create code with excellent developer experience (DX)
- Ensure type safety with comprehensive docblocks
- Write maintainable, testable code
```

### 2. Architectural Patterns with Concrete Examples

Don't just describe your architecture—show it. Provide concrete, implementable examples of each pattern you use.

```php
<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Leave;
use App\DataTransferObjects\LeaveRequestDto;
use Illuminate\Support\Collection;

final class LeaveManagementService
{
    /**
     * Get all pending leave requests for a specific department.
     *
     * @param int $departmentId
     * @return Collection<int, Leave>
     */
    public function getPendingLeaveRequests(int $departmentId): Collection
    {
        return Leave::query()
            ->where('department_id', $departmentId)
            ->where('status', 'pending')
            ->get();
    }

    /**
     * Calculate remaining leave days for a user.
     *
     * @param int $userId
     * @return int
     */
    public function calculateRemainingLeaveDays(int $userId): int
    {
        // Implementation
    }
}
```

### 3. Common Pitfalls with Contrasting Examples

Illustrate common mistakes with contrasting "AVOID" vs "PREFERRED" examples. This is particularly effective for teaching AI to avoid anti-patterns specific to your codebase.

```php
// AVOID - Missing proper casts
class Schedule extends Model
{
    protected $fillable = [
        'user_id',
        'start_date',
        'end_date',
    ];
}

// PREFERRED - With proper casts
class Schedule extends Model
{
    protected $fillable = [
        'user_id',
        'start_date',
        'end_date',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];
}
```

### 4. Testing Guidelines with Example Tests

Testing is critical for Laravel applications. Include examples of your preferred testing approach.

```php
<?php

use App\Models\User;
use App\Services\LeaveManagementService;

beforeEach(function () {
    $this->service = app(LeaveManagementService::class);
    $this->user = User::factory()->create();
});

test('it calculates remaining leave days correctly', function () {
    // Act
    $remainingDays = $this->service->calculateRemainingLeaveDays($this->user->id);

    // Assert
    expect($remainingDays)->toBeInt();
    expect($remainingDays)->toBeGreaterThanOrEqual(0);
});

test('it returns pending leave requests for department', function () {
    // Arrange
    $departmentId = 1;

    // Act
    $pendingRequests = $this->service->getPendingLeaveRequests($departmentId);

    // Assert
    expect($pendingRequests)->toBeInstanceOf(Collection::class);
});
```

### 5. Verification Steps

Include a checklist that AI can follow to verify its generated code meets your standards.

```markdown
## Verification Steps

Before completing any implementation, ensure that:

1. All classes follow their respective architectural patterns (Service, Action, Strategy, DTO)
2. All method parameters and return types are properly type-hinted
3. Models have proper casts for integer and date fields
4. Unit and feature tests are written for both happy and sad paths
5. Policies are implemented for all controller methods
6. Code is properly documented with PHPDoc comments
```

## 10 Tips for Crafting Effective Laravel Cursor Rules

### 1. Be Explicit About Architectural Boundaries

Clearly define the responsibilities of different architectural components. In Laravel applications, this often means specifying the boundaries between:

- **Controllers** - Request handling and response generation
- **Services** - Complex business logic and orchestration
- **Actions** - Single-purpose business operations
- **Models** - Data structure and relationships
- **Repositories** - Data access and persistence (if used)

> Controllers should:
> - Validate input data
> - Call appropriate services or actions
> - Return responses
>
> Controllers should NOT:
> - Contain business logic
> - Access the database directly
> - Handle file operations

### 2. Enforce Type Safety with Examples

PHP 8.x's improved type system is powerful but requires consistent usage. Show examples of proper type declarations:

```php
// PREFERRED
public function findAvailableAppointments(
    int $doctorId,
    \DateTimeInterface $startDate,
    \DateTimeInterface $endDate
): Collection {
    // Implementation
}

// AVOID
public function findAvailableAppointments($doctorId, $startDate, $endDate) {
    // Implementation
}
```

### 3. Standardize Exception Handling

Establish clear patterns for exception handling in your Laravel application:

```php
// PREFERRED
public function createAppointment(AppointmentDto $dto): Appointment
{
    try {
        // Implementation
    } catch (ValidationException $e) {
        report($e);
        throw $e;
    } catch (\Exception $e) {
        report($e);
        throw new AppointmentCreationException('Failed to create appointment', 0, $e);
    }
}
```

### 4. Define Clear Patterns for Database Queries

Encourage performance-conscious database access:

```php
// PREFERRED - Using Laravel Query Builder with eager loading
public function getActiveAppointments(int $doctorId): Collection
{
    return Appointment::query()
        ->where('doctor_id', $doctorId)
        ->where('status', 'active')
        ->with(['patient', 'room'])
        ->get();
}

// AVOID - N+1 query problem
public function getActiveAppointments(int $doctorId): Collection
{
    $appointments = Appointment::where('doctor_id', $doctorId)
        ->where('status', 'active')
        ->get();

    // Inefficient: This creates N+1 queries
    foreach ($appointments as $appointment) {
        $patient = $appointment->patient;
        $room = $appointment->room;
    }

    return $appointments;
}
```

### 5. Document Design Pattern Usage

For complex design patterns like Strategy or Command, provide complete examples:

```php
interface ScheduleStrategyInterface
{
    public function generateSchedule(int $userId, \DateTimeInterface $startDate, \DateTimeInterface $endDate): array;
}

abstract class ScheduleBaseStrategy implements ScheduleStrategyInterface
{
    protected function validateConstraints(int $userId, \DateTimeInterface $startDate, \DateTimeInterface $endDate): bool
    {
        // Common validation logic
        return true;
    }
}

class DoctorScheduleStrategy extends ScheduleBaseStrategy
{
    public function generateSchedule(int $userId, \DateTimeInterface $startDate, \DateTimeInterface $endDate): array
    {
        $this->validateConstraints($userId, $startDate, $endDate);
        // Doctor-specific schedule generation logic
        return [];
    }
}

class ScheduleStrategyContext
{
    private array $strategies = [];

    public function registerStrategy(string $role, ScheduleStrategyInterface $strategy): void
    {
        $this->strategies[$role] = $strategy;
    }

    public function executeStrategy(string $role, int $userId, \DateTimeInterface $startDate, \DateTimeInterface $endDate): array
    {
        $strategy = $this->getStrategy($role);
        return $strategy->generateSchedule($userId, $startDate, $endDate);
    }
}
```

### 6. Include Advanced Laravel Features

Document how to use Laravel-specific features in your application:

```php
// PREFERRED - Using Laravel's Query Scopes
class Appointment extends Model
{
    public function scopeUpcoming($query)
    {
        return $query->where('start_time', '>', now());
    }

    public function scopeForDoctor($query, int $doctorId)
    {
        return $query->where('doctor_id', $doctorId);
    }
}

// Usage
$upcomingAppointments = Appointment::upcoming()->forDoctor($doctorId)->get();
```

### 7. Define Clear Validation Practices

Show how validation should work in your application:

```php
// PREFERRED - Using Laravel's Form Requests
class AppointmentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'doctor_id' => ['required', 'integer', 'exists:users,id'],
            'patient_id' => ['required', 'integer', 'exists:users,id'],
            'start_time' => ['required', 'date', 'after:now'],
            'end_time' => ['required', 'date', 'after:start_time'],
            'room_id' => ['nullable', 'integer', 'exists:rooms,id'],
            'notes' => ['nullable', 'string', 'max:500'],
        ];
    }
}
```

### 8. Illustrate Proper Authorization

Show how authorization should work with your role-based access control:

```php
// PREFERRED - Using Policies
class AppointmentPolicy
{
    public function view(User $user, Appointment $appointment): bool
    {
        return $user->id === $appointment->doctor_id
            || $user->id === $appointment->patient_id
            || $user->hasRole('admin')
            || $user->hasPermissionTo('view appointments');
    }
}
```

### 9. Define Documentation Standards

Establish clear standards for DocBlocks and comments:

```php
/**
 * Calculate available time slots for a doctor on a specific date.
 *
 * This method considers the doctor's working hours, existing appointments,
 * and any approved leave requests to determine available slots.
 *
 * @param int $doctorId The ID of the doctor
 * @param \DateTimeInterface $date The date to check availability for
 * @return \Illuminate\Support\Collection<int, array> Collection of available time slots
 *         with 'start' and 'end' keys as DateTime objects
 * @throws \App\Exceptions\DoctorNotFoundException If doctor does not exist
 */
public function getAvailableTimeSlots(int $doctorId, \DateTimeInterface $date): Collection
```

### 10. Add Performance Considerations

Include performance best practices in your rules:

> ## Performance Considerations
>
> - Always eager load relationships to avoid N+1 queries
> - Use chunking for processing large datasets
> - Implement caching for expensive queries
> - Consider using database transactions for multiple related operations
> - Use indexed columns for frequently queried data

## Conclusion

Creating effective Cursor Rules for Laravel/PHP projects is about much more than just coding standards—it's about encoding your team's architectural vision and best practices into a format that AI can understand and apply consistently. By clearly defining your patterns, expectations, and constraints, you empower AI to generate code that not only works but also aligns with your project's architectural principles.

The investment in creating these rules pays dividends through:
- Reduced code review cycles
- More consistent codebase
- Easier onboarding for new developers
- Preservation of architectural integrity
- Improved maintainability and scalability

As PHP and Laravel continue to evolve, your Cursor Rules should evolve too. Regularly updating them with new patterns, best practices, and lessons learned ensures they remain relevant and valuable for your development process.

By embracing this approach, you can harness the power of AI-assisted development while maintaining the high standards and architectural vision that make your Laravel application robust, maintainable, and a joy to work with.

## Resources

- [Official Laravel Documentation](mdc:https:/laravel.com/docs)
- [PHP 8.2 Release Notes](mdc:https:/www.php.net/releases/8.2/en.php)
- [Pest PHP Testing Framework](mdc:https:/pestphp.com)
- [Laravel Best Practices](mdc:https:/github.com/alexeymezenin/laravel-best-practices)
- [Spatie Laravel Permissions](mdc:https:/github.com/spatie/laravel-permission)
