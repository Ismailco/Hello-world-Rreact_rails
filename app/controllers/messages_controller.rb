class MessagesController < ApplicationController
  # GET /messages or /messages.json
  def index
    @messages = Message.all
    @message = Message.all.sample(5).first

    respond_to do |format|
      format.html
      format.json { render json: { greeting: @message.text } }
    end
  end

  # GET /messages/new
  def new
    @message = Message.new
  end

  # POST /messages or /messages.json
  def create
    @message = Message.new(message_params)

    respond_to do |format|
      if @message.save
        format.html { redirect_to message_url(@message), notice: "Message was successfully created." }
        format.json { render :show, status: :created, location: @message }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end


  private

    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:title, :text)
    end
end
