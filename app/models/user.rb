class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :topics, dependent: :destroy

  after_create :create_day_topics!

  private

  def create_day_topics!
    begin_date = Date.parse("2015-09-01")
    end_date = Date.parse("2018-12-31")

    (begin_date..end_date).each do |date|
      Topic.create!(
        user_id: self.id,
        name: date.strftime("%a, %b %d"),
        created_at: date
      )
    end
  end
end
