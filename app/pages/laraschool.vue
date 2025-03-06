<template>
    <div class="min-h-screen bg-white">
      <!-- Hero Section -->
      <section class="relative min-h-[90vh] flex items-center">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10"></div>
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
                >
              Maîtrisez Laravel 12
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
               >
              Apprenez à développer des applications web robustes avec notre série de vidéos complète sur Laravel 12.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <UButton
                size="xl"
                class="bg-gray-900 hover:bg-gray-800 text-white transition-all duration-300 px-8">
                Commencer maintenant
              </UButton>
              <UButton
                variant="ghost"
                size="xl"
                class="text-gray-900 hover:bg-gray-100 transition-all duration-300">
                Voir le programme
              </UButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="py-32 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div v-for="(feature, index) in features"
                 :key="index"
                 :delay="index * 100"
                 class="text-center">
              <UIcon
                :name="feature.icon"
                class="h-12 w-12 mx-auto mb-6 text-gray-900"
              />
              <h3 class="text-xl font-semibold mb-4">{{ feature.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Content -->
      <section class="py-32 bg-gray-50">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-20">
            Programme du cours
          </h2>
          <div class="max-w-3xl mx-auto space-y-12">
            <div v-for="(item, index) in courseContent"
                 :key="index"
                 :delay="index * 50"
                 class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="py-32 bg-white">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-20">
            Témoignages
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div v-for="(testimonial, index) in testimonials"
                 :key="index"
                 :delay="index * 100"
                 class="bg-gray-50 p-8 rounded-2xl">
              <div class="flex gap-1 mb-6">
                <UIcon name="lucide:star" class="h-5 w-5 text-gray-900" v-for="n in 5" :key="n" />
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ testimonial.quote }}</p>
              <p class="font-medium text-gray-900">{{ testimonial.author }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing -->
      <section class="py-32 bg-gray-50">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-20">
            Tarifs
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div v-for="(plan, index) in pricingPlans"
                 :key="index"

                 :delay="index * 100"
                 :class="[
                   'relative bg-white p-8 rounded-2xl transition-all duration-300',
                   plan.popular ? 'shadow-xl scale-105' : 'shadow-sm hover:shadow-md'
                 ]">
              <div v-if="plan.popular"
                   class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-gray-900 text-white px-4 py-1 rounded-full text-sm">
                  Populaire
                </span>
              </div>
              <div class="text-center mb-8">
                <h3 class="text-2xl font-semibold mb-2">{{ plan.name }}</h3>
                <p class="text-4xl font-bold">{{ plan.price }}€</p>
                <p class="text-gray-600 mt-2">Accès à vie</p>
              </div>
              <ul class="space-y-4 mb-8">
                <li v-for="feature in plan.features"
                    :key="feature"
                    class="flex items-center text-gray-600">
                  <UIcon name="lucide:check" class="h-5 w-5 text-gray-900 mr-3" />
                  {{ feature }}
                </li>
              </ul>
              <UButton
                :color="plan.popular ? 'black' : 'gray'"
                :variant="plan.popular ? 'solid' : 'outline'"
                class="w-full transition-transform hover:scale-105">
                S'inscrire
              </UButton>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-32 bg-gray-900 text-white">
        <div class="container mx-auto px-6 text-center">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-4xl font-bold mb-8"
                >
              Prêt à devenir un expert Laravel ?
            </h2>
            <p class="text-xl text-gray-400 mb-12 leading-relaxed">
              Rejoignez plus de 5000 développeurs qui ont transformé leur carrière avec LaraSchool.
            </p>
            <UButton
              color="white"
              size="xl"
              class="transition-transform hover:scale-105">
              Commencer l'aventure
            </UButton>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-20 bg-white border-t border-gray-100">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 class="text-xl font-bold mb-4">LaraSchool</h3>
              <p class="text-gray-600">La meilleure façon d'apprendre Laravel 12 en français.</p>
            </div>
            <div>
              <h4 class="font-medium mb-4">Liens utiles</h4>
              <ul class="space-y-2">
                <li v-for="link in footerLinks.useful" :key="link">
                  <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">
                    {{ link }}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium mb-4">Ressources</h4>
              <ul class="space-y-2">
                <li v-for="link in footerLinks.resources" :key="link">
                  <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">
                    {{ link }}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium mb-4">Newsletter</h4>
              <p class="text-gray-600 mb-4">Restez informé des dernières mises à jour</p>
              <form class="flex gap-2">
                <UInput
                  placeholder="Votre email"
                  class="flex-1"
                  size="lg" />
                <UButton color="black" size="lg">OK</UButton>
              </form>
            </div>
          </div>
          <div class="mt-16 pt-8 border-t border-gray-100 text-center text-gray-600">
            <p>&copy; 2025 LaraSchool. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>

  <script setup>
  const features = [
    {
      icon: 'lucide:graduation-cap',
      title: 'Contenu de qualité',
      description: 'Des vidéos structurées et pédagogiques créées par des experts de Laravel.'
    },
    {
      icon: 'lucide:code',
      title: 'Projets concrets',
      description: 'Apprenez en construisant de vraies applications du monde réel.'
    },
    {
      icon: 'lucide:sparkles',
      title: 'À jour avec Laravel 12',
      description: 'Toutes les nouveautés et meilleures pratiques de la dernière version.'
    }
  ];

  const courseContent = [
    {
      title: 'Les fondamentaux de Laravel 12',
      description: 'Installation, configuration et comprendre l\'architecture MVC.'
    },
    {
      title: 'Routage et contrôleurs',
      description: 'Maîtrisez le système de routage et créez des contrôleurs efficaces.'
    },
    {
      title: 'Bases de données et Eloquent ORM',
      description: 'Travaillez avec les migrations, les seeders et le puissant ORM Eloquent.'
    },
    {
      title: 'Authentication et Autorisation',
      description: 'Implémentez des systèmes d\'authentification sécurisés et gérez les permissions.'
    },
    {
      title: 'API REST avec Laravel',
      description: 'Créez des API RESTful performantes et sécurisées.'
    },
    {
      title: 'Tests et déploiement',
      description: 'Apprenez à tester votre application et à la déployer en production.'
    }
  ];

  const testimonials = [
    {
      quote: 'LaraSchool m\'a permis de maîtriser Laravel en seulement quelques semaines. Les explications sont claires et les projets très formateurs.',
      author: 'Thomas D., Développeur web'
    },
    {
      quote: 'J\'ai pu lancer ma startup grâce aux compétences acquises avec LaraSchool. Le meilleur investissement de ma carrière !',
      author: 'Sophie M., Entrepreneure'
    },
    {
      quote: 'En tant que débutant, j\'ai trouvé les cours très accessibles tout en étant complets. Je recommande vivement !',
      author: 'Pierre L., Étudiant'
    }
  ];

  const pricingPlans = [
    {
      name: 'Débutant',
      price: '29',
      features: [
        'Modules fondamentaux',
        'Projet de base',
        'Forum communautaire'
      ]
    },
    {
      name: 'Complet',
      price: '49',
      popular: true,
      features: [
        'Tous les modules',
        '3 projets complets',
        'Code source',
        'Support par email'
      ]
    },
    {
      name: 'Premium',
      price: '79',
      features: [
        'Tout le contenu Complet',
        'Session de mentorat (1h)',
        'Projets exclusifs',
        'Support prioritaire'
      ]
    }
  ];

  const footerLinks = {
    useful: ['Accueil', 'Cours', 'Blog', 'Contact'],
    resources: ['Documentation', 'FAQ', 'Forum']
  };
  </script>
