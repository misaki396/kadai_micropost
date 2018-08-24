Rails.application.routes.draw do

 root to: 'toppages#index'
 post "likes/create" => "likes#create"
   post "likes/:micropost_id/create" => "likes#create"
  post "likes/:micropost_id/destroy" => "likes#destroy"
  
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
 
 get 'signup', to: 'users#new'
 resources :users, only: [:index, :show, :new, :create] do
    member do
      get :followings
      get :followers
      get :microposts
    end

  end
  
  

  resources :microposts, only: [:create, :destroy] do
    member do
      get :likes
    end
    collection do
      get :search
    end
  end
  resources :relationships, only: [:create, :destroy]
  resources :likes, only: [:create, :destroy]
  
 end
 