class Flight < ApplicationRecord

  belongs_to :Airplane
  has_many :reservations
end
