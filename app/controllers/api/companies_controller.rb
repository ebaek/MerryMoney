class Api::CompaniesController < ApplicationController
    before_action :ensure_logged_in

    def show
        @company = Company.find_by(params[:ticker])
        render :show
    end

    def create 
        @company = Company.new(company_params)

        if @company.save
            render :show
        else
            render json: @company.errors.full_messages, status: 401
        end
    end

    private
    def company_params
        params.require(:company).permit(:ticker)
    end 
end