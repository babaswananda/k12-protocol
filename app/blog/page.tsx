import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Blog - .K-12 Portal',
  description: 'Latest insights on AI-native education, compliance, and the future of K-12 technology.',
}

export default function BlogPage() {
  const featuredPost = {
    title: 'Executive Order 14192: What School Districts Need to Know',
    excerpt: 'A comprehensive guide to understanding and implementing the federal mandate for AI integration in public education.',
    author: 'Dr. Elena Rodriguez',
    date: '2024-06-01',
    readTime: '8 min read',
    category: 'Compliance',
    image: '/api/placeholder/600/300',
    slug: 'executive-order-14192-guide'
  }

  const posts = [
    {
      title: 'Building AI-Native Learning Experiences: Best Practices for Educators',
      excerpt: 'How teachers can leverage AI tutors and personalized learning agents to enhance student outcomes.',
      author: 'Dr. Amara Johnson',
      date: '2024-05-28',
      readTime: '6 min read',
      category: 'Education',
      image: '/api/placeholder/400/200',
      slug: 'ai-native-learning-best-practices'
    },
    {
      title: 'Data Sovereignty in Education: Why Districts Need Protocol-Native Infrastructure',
      excerpt: 'Understanding the difference between platforms and protocols, and why it matters for your district.',
      author: 'Marcus Chen',
      date: '2024-05-25',
      readTime: '5 min read',
      category: 'Technology',
      image: '/api/placeholder/400/200',
      slug: 'data-sovereignty-education'
    },
    {
      title: 'Student Privacy in the AI Age: A Comprehensive Security Framework',
      excerpt: 'How .K-12 ensures COPPA, FERPA, and EO 14192 compliance while enabling AI-enhanced learning.',
      author: 'David Kim',
      date: '2024-05-22',
      readTime: '7 min read',
      category: 'Security',
      image: '/api/placeholder/400/200',
      slug: 'student-privacy-ai-age'
    },
    {
      title: 'The Economics of Educational Technology: ROI of Protocol-Native Systems',
      excerpt: 'Analyzing the long-term cost benefits of owning your educational infrastructure.',
      author: 'Dr. Elena Rodriguez',
      date: '2024-05-20',
      readTime: '4 min read',
      category: 'Economics',
      image: '/api/placeholder/400/200',
      slug: 'economics-educational-technology'
    },
    {
      title: 'Case Study: Springfield USD\'s Successful .K-12 Implementation',
      excerpt: 'How one district transformed their educational technology infrastructure in just 6 weeks.',
      author: 'Implementation Team',
      date: '2024-05-18',
      readTime: '10 min read',
      category: 'Case Study',
      image: '/api/placeholder/400/200',
      slug: 'springfield-usd-case-study'
    },
    {
      title: 'Future-Proofing K-12 Education: Preparing for the Next Decade',
      excerpt: 'Trends, technologies, and strategies that will shape the future of public education.',
      author: 'Dr. Amara Johnson',
      date: '2024-05-15',
      readTime: '9 min read',
      category: 'Future',
      image: '/api/placeholder/400/200',
      slug: 'future-proofing-k12-education'
    }
  ]

  const categories = [
    'All Posts',
    'Compliance',
    'Education',
    'Technology',
    'Security',
    'Case Studies',
    'Economics',
    'Future'
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            .K-12 Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest insights on AI-native education, compliance, and the future 
            of K-12 technology infrastructure.
          </p>
        </div>
      </div>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-50 to-indigo-50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="h-64 lg:h-full bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-primary-600 font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest insights on AI-native education delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
