# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

apartments = [
    {
      id: 1,
      street: "123 Street",
      city: "SD",
      state: "CA",
      manager: "Joe",
      email: "joe@testing.com",
      price: "1000",
      bedrooms: 2,
      bathrooms: 3,
      pets: "all pets welcome",
      user_id: 1
    },
    {
      id: 2,
      street: "456 Street",
      city: "SD",
      state: "CA",
      manager: "Joe",
      email: "joe@testing.com",
      price: "1000",
      bedrooms: 2,
      bathrooms: 3,
      pets: "no snakes",
      user_id: 1
    },
    {
      id: 3,
      street: "888 Street",
      city: "SD",
      state: "CA",
      manager: "Jenny",
      email: "jenny@testing.com",
      price: "1800",
      bedrooms: 1,
      bathrooms: 2,
      pets: "no dogs",
      user_id: 1
    }
  ]
  
  apartments.each do |each_apartment|
    Apartment.create each_apartment 
    puts "creating apartment #{each_apartment}"
  end