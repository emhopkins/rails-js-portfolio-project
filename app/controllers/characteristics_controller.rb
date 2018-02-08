class CharacteristicsController < ApplicationController
	def show
		@characteristic = Characteristic.find(params[:id])
		respond_to do |format|
			format.html { render :show }
			format.json { render json: @characteristic }
		end
	end
end