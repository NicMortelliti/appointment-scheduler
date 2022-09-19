puts "🌱 Seeding data..."

# Create Doctors
Doctor.create(title: 'Dr.', first_name: 'Brock', last_name: 'Lee')
Doctor.create(title: 'Dr.', first_name: 'Cara', last_name: 'Van')
Doctor.create(title: 'Dr.', first_name: 'Tim', last_name: 'Burr')
Doctor.create(title: 'Dr.', first_name: 'Holly', last_name: 'Day')
Doctor.create(title: 'Dr.', first_name: 'Dennis', last_name: 'Toffis')
Doctor.create(title: 'Dr.', first_name: 'Anita', last_name: 'Job')

puts '✅ Done seeding!'