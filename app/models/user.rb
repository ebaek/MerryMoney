# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  portfolio_value :float            not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :first_name, :last_name, :portfolio_value, :password_digest, presence: true

    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password

    

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.update!(session_token: User.generate_session_token)
        self.session_token
    end

    private 
    
    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end
