Rails.application.routes.draw do

  get '/flights/search/:origin/:destination' => 'flight#search'

  get '/flights/:id' => 'flights#show'

  #3. Confirm a booking:

  post '/flights/:id/reservation' => 

end
