class CharacteristicsController < ApplicationController
	def show
		@characteristics = Characteristic.all
		render json: @characteristics
	end
end