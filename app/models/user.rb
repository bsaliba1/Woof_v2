# == Schema Information
#
# Table name: users
#
#  id           :integer          not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  full_name    :string
#  user_type    :string
#  slack_handle :string
#

class User < ApplicationRecord

end
