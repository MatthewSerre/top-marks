Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :folders do
        resources :bookmarks
      end
    end
  end

  get '/bookmarks', to: 'bookmarks#all_bookmarks', :as => 'bookmarks'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
