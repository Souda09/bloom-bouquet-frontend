 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch products from API (optional)
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        // If you have a backend API, use this:
        // const response = await axios.get('/api/products');
        // return response.data;
        
        // For now, return empty array (products will come from local data)
        return [];
    }
);

const initialState = {
    products: [],
    filteredProducts: [],
    loading: false,
    error: null,
    selectedCategory: 'all',
    selectedOccasion: 'all',
    searchQuery: '',
    priceRange: [0, 200],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // Set products
        setProducts: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
        },
        
        // Filter by category
        filterByCategory: (state, action) => {
            state.selectedCategory = action.payload;
            applyFilters(state);
        },
        
        // Filter by occasion
        filterByOccasion: (state, action) => {
            state.selectedOccasion = action.payload;
            applyFilters(state);
        },
        
        // Filter by search query
        filterBySearch: (state, action) => {
            state.searchQuery = action.payload;
            applyFilters(state);
        },
        
        // Filter by price range
        filterByPrice: (state, action) => {
            state.priceRange = action.payload;
            applyFilters(state);
        },
        
        // Reset all filters
        resetFilters: (state) => {
            state.selectedCategory = 'all';
            state.selectedOccasion = 'all';
            state.searchQuery = '';
            state.priceRange = [0, 200];
            state.filteredProducts = state.products;
        },
        
        // Sort products
        sortProducts: (state, action) => {
            const { sortBy } = action.payload;
            const products = [...state.filteredProducts];
            
            switch (sortBy) {
                case 'price-low':
                    products.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
                    break;
                case 'price-high':
                    products.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
                    break;
                case 'rating':
                    products.sort((a, b) => b.rating - a.rating);
                    break;
                case 'popular':
                    products.sort((a, b) => b.reviews - a.reviews);
                    break;
                default:
                    // Default: by id (newest first)
                    products.sort((a, b) => b.id - a.id);
                    break;
            }
            
            state.filteredProducts = products;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.filteredProducts = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Helper function to apply all filters
const applyFilters = (state) => {
    const { products, selectedCategory, selectedOccasion, searchQuery, priceRange } = state;
    
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
        filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by occasion
    if (selectedOccasion !== 'all') {
        filtered = filtered.filter(product => product.occasion === selectedOccasion);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            (product.occasion && product.occasion.toLowerCase().includes(query))
        );
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
        (product.discountPrice || product.price) >= priceRange[0] &&
        (product.discountPrice || product.price) <= priceRange[1]
    );
    
    state.filteredProducts = filtered;
};

// Export actions
export const {
    setProducts,
    filterByCategory,
    filterByOccasion,
    filterBySearch,
    filterByPrice,
    resetFilters,
    sortProducts,
} = productSlice.actions;

export default productSlice.reducer;
