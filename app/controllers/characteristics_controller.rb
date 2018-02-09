class CharacteristicsController < ApplicationController

	def index
		@characteristics = Characteristic.all
	end

	def new
		@characteristic = Characteristic.new
		respond_to do |format|
      format.js
    end
	end

	def show
		@characteristic = Characteristic.find(params[:id])
		respond_to do |format|
			format.html { render :show }
			format.json { render json: @characteristic }
		end
	end

  def characteristics_params
    params.require(:characteristic).permit(:name)
  end	
end