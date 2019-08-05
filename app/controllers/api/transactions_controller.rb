
class Api::TransactionsController < ApplicationController 
    def show
        @transaction = Company.find_by(ticker: params[:ticker])
        render :show
    end

    def create
        @transaction = Transaction.new(transaction_params);
        @transaction.user_id = current_user.id;
        debugger
        if @transaction.save
            render :show
        else
            render json: @transaction.errors.full_messages, status: 401
        end
    end

    def index
        if current_user
            @transactions = current_user.transactions
            render :index
        else
            render json: @transactions.errors.full_messages, status: 401
        end
    end

    private
    def transaction_params
        params.require(:transaction)
            .permit(:ticker, :purchase_price, :quantity, :buy)
    end
end