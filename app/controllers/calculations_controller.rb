class CalculationsController < ApplicationController

def new
end

def create
	@calculation = Calculation.new(calculation_params)
	@calculation.save
	redirect_to @calculation	
end

def show
  @calculation = Calculation.find(params[:id])
end

private
  def calculation_params
    params.require(:calculation).permit(:email)
  end

end
