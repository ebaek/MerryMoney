class SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], [:user][:password])

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Invalid username and/or password"], status: 401
        end
    end

   def destroy
        @user = current_user

        if @user
            logout!
            render "api/users/show"
        else
            render json: ["No user signed in"], status: 404
        end
   end
end