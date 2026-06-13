import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Featured Products Data
  featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, oldPrice: 149.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300', rating: 5, badge: 'Sale' },
    { id: 2, name: 'Smart Watch', price: 199.99, oldPrice: 299.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300', rating: 4, badge: 'Hot' },
    { id: 3, name: 'Premium Backpack', price: 79.99, oldPrice: 129.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300', rating: 5, badge: 'New' },
    { id: 4, name: 'Sunglasses', price: 49.99, oldPrice: 89.99, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300', rating: 4, badge: 'Trending' },
    { id: 5, name: 'Leather Wallet', price: 39.99, oldPrice: 69.99, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300', rating: 5, badge: 'Sale' },
    { id: 6, name: 'Running Shoes', price: 129.99, oldPrice: 199.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300', rating: 4, badge: 'Hot' }
  ];

  // Category Data
  categories = [
    { name: 'Electronics', icon: '💻', color: '#667eea' },
    { name: 'Fashion', icon: '👕', color: '#f093fb' },
    { name: 'Accessories', icon: '⌚', color: '#4facfe' },
    { name: 'Sports', icon: '⚽', color: '#43e97b' },
    { name: 'Books', icon: '📚', color: '#fa709a' },
    { name: 'Home & Living', icon: '🏠', color: '#f6d365' }
  ];

  // Testimonials
  testimonials = [
    { name: 'Sarah Johnson', role: 'Verified Buyer', comment: 'Amazing quality! Fast shipping and great customer service. Will definitely buy again!', rating: 5, image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Michael Chen', role: 'Tech Enthusiast', comment: 'The products are top-notch. Best online shopping experience I\'ve had in years!', rating: 5, image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Emma Davis', role: 'Fashion Blogger', comment: 'Love their collection! Very trendy and affordable prices. 10/10 recommend.', rating: 4, image: 'https://randomuser.me/api/portraits/women/3.jpg' }
  ];

  currentYear = new Date().getFullYear();
}
