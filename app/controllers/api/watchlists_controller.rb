class Api::WatchlistsController < ApplicationController
    before_action :ensure_logged_in

    def index
        @watchlist_items = Watchlist.includes(:user).where(user_id: current_user.id)
        render :index
    end

    def create
        @watchlist_item = Watchlist.new(watchlist_params)
        if @watchlist_item.save
            render :show
        else
            render json: @watchlist_item.errors, status: 401
        end
    end

    def destroy
        @watchlist_item = Watchlist.find(params[:id])
        if @watchlist_item
            @watchlist_item.delete
            render :show
        else
            render json: ['Unable to remove item from watchlist.'], status: 404
        end
    end

    def watchlist_params
        params.require(:item).permit(:user_id, :ticker)
    end
end
