# == Schema Information
#
# Table name: pets
#
#  id          :integer          not null, primary key
#  name        :string
#  birthday    :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  breed       :string
#  description :string
#

require 'test_helper'

class PetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
