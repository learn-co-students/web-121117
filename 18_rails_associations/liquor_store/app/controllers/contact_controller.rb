class ContactController < ApplicationController
  def contact_form
  end

  def contact_action
    byebug
    redirect_to users_path
  end
end
