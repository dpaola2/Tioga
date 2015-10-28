class Topic < ActiveRecord::Base
  belongs_to :user
  validates :name, presence: true
  validates :user_id, presence: true

  after_create :populate_rollup_fields!

  private

  def populate_rollup_fields!
    self.week = (self.created_at - self.created_at.wday).strftime("%Y-%m-%d")
    self.day_of_week = self.created_at.strftime("%A")
    self.year_month = self.created_at.strftime("%Y-%m")
    self.save!
  end
end
