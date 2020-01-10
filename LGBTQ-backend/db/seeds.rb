# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Category.destroy_all
Meetup.destroy_all

u1 = User.create_or_find_by(name: 'tiff', picture: 'https://media-exp1.licdn.com/dms/image/C4D03AQFxelN7X2pP-A/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=zSCOXIkU-rd3PEXJpkTeucjMfRsemZBtUKitN82yR9k',
                            bio: 'I made this app!', pronouns: 'she/her')
u2 = User.create_or_find_by(name: 'clarkson', picture: 'https://lh3.googleusercontent.com/aN_311_Kp1N4o6CYWowMTVng77wMAit5g1Yls4nuy4Pg7PdDmEF_gFYdYmsLZJKIYc0antAoDHPbUSYdmdjkt4WKQjNkTvHuKefr4PyVBkgfLkA8RBQFkMBfWqrtE71PIHkWe0dOKR_nI7Udr0OTm_HlAuPzT-mTiC6I1KlBuq8FriZC9f88mOVzDVY3LaAOEhqtZmLNR2QD9XtQhYyxQnUK5dbxoU6exYkJfOfy-LZsK5KMo4YmdxI2xbsKg9A2Ym6ADOW4ytEwtcQ2DievM6vI8HkOozKeyI-es6bYbmwnTog8J2r7_634GYFhTtw67mOA_WeonDNmHzWwDc5BvNPc39IYqQ1IdCecYJ9lwionCWOPnoBP-FYPoCxPdqnqV6e_HAZEJrPEhHZTgCDFYAkiYy_chNkgvZbCR2B5ZWFsMpoow-y1Es6wbuHpixX8TMLEVtQ-E4UOsWU2NtzhUai1zV-8aG1U2EZ7T8IInbS2yr-oj9NcP3wq8BQYo8aTK-2XiWxGKNG31oz9ZJAJ-dgnEcUNY9wE-zhSFawiZVCOLNw6c6xnVartAVDn633htQ7UScmo1mNQRFxfZh88yTqiJPagD708vcNUUPjXnadB3YitigEIBeiGu71oYt6paQ539FGZSIs3DCYfYSFCc06mCKynW0nioSlUWFVwk-2Yfec_tLB79z0=s1200-no',
                            bio: 'Top Gear Host, a personal dummy data go to', pronouns: 'he/him')

c1 = Category.create_or_find_by(category: 'Transgender/Genderqueer')
c2 = Category.create_or_find_by(category: 'Lesbian')
c3 = Category.create_or_find_by(category: 'Gay')

m1 = Meetup.create_or_find_by(category_id: c1.id, location: 'Alexandria,VA', date: Date.new, time: Time.new, info: 'Coffeeshop')
m2 = Meetup.create_or_find_by(category_id: c2.id, location: 'Washington DC', date: Date.new, time: Time.new, info: 'LGBTQ+ bar')
m3 = Meetup.create_or_find_by(category_id: c3.id, location: 'New York City, NY', date: Date.new, time: Time.new, info: 'Park')

# Date.new and Time.new is making test data, not accurate time data