class Api::V1::FoldersController < ApplicationController

    def index
        @folders = Folder.all.order(:name)
        render json: @folders
    end

    def create
        @folder = Folder.new(folder_params)
        if @folder.save
            render json: @folder
        else
            render json: {error: "Error creating folder"}
        end
    end

    def show
        @folder = Folder.find(:id)
        render json: @folder
    end

    def destroy
        folder = Folder.find(params["id"])
        folder.bookmarks.destroy_all
        folder.destroy
        render json: {success: "Folder deleted!"}
    end

    private

    def folder_params
        params.require(:folder).permit(:name)
    end

end
