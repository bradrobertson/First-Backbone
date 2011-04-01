class User < ActiveRecord::Base
  
  attr_accessible :name, :birth, :sex
  
end
