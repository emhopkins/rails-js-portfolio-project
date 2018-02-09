class CharacteristicsController < ApplicationController

	def index
		@characteristics = Characteristic.all
	end

	def new
		@characteristic = Characteristic.new
		render json: @characteristic
	end

	def show
		@characteristic = Characteristic.find(params[:id])
		respond_to do |format|
			format.html { render :show }
			format.json { render json: @characteristic }
		end
	end
end