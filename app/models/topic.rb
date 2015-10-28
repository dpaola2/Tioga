class Topic < ActiveRecord::Base
  belongs_to :user
  has_many :things
  validates :name, presence: true
  validates :user_id, presence: true

  after_create :populate_rollup_fields!

  scope :tomorrow, -> {
    date = Time.zone.now + 1.day
    where(:created_at => (date.beginning_of_day..date.end_of_day))
  }
  scope :today, -> {
    date = Time.zone.now
    where(:created_at => (date.beginning_of_day..date.end_of_day))
  }
  scope :past, -> { where("created_at < ?", Time.zone.now.beginning_of_day).order('created_at DESC') }

  private

  def populate_rollup_fields!
    self.week = (self.created_at - self.created_at.wday).strftime("%Y-%m-%d")
    self.day_of_week = self.created_at.strftime("%A")
    self.year_month = self.created_at.strftime("%Y-%m")
    self.save!
  end
end
