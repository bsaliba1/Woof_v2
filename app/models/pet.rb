# == Schema Information
#
# Table name: pets
#
#  id         :integer          not null, primary key
#  name       :string
#  birthday   :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Pet < ApplicationRecord
end
