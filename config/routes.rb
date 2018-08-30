Rails.application.routes.draw do

 root to: 'toppages#index'
 
 
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
 
  get 'signup', to: 'users#new'
 
  resources :users, only: [:index, :show, :new, :create] do
    member do
      get :followings
      get :followers
      get :microposts
      get :likes, to: 'users#like_microposts'
    end
   end

  resources :microposts, only: [:create, :destroy]
  resources :likes, only: [:create, :destroy]
  resources :relationships, only: [:create, :destroy]
  
  
 end
 