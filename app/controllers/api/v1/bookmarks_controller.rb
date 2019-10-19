class Api::V1::BookmarksController < ApplicationController

    before_action :set_folder

    def index
        @bookmarks = @folder.bookmarks
        render json: @bookmarks
    end

    def show
        @bookmark = @folder.bookmarks.find(id: params[:id])
        render json: @bookmark
    end

    def create
        @bookmark = Folder.bookmarks.new(bookmark_params)
        if @bookmark.save
            render json: @bookmark
        else
            render json: {error: "Error creating bookmark"}
        end
    end

    def destroy
        @bookmark = @folder.bookmarks.find(id: params[:id])
        @bookmark.destroy
    end

    private

    def set_folder
        @folder = Folder.find(params[:folder_id])
    end

    def bookmark_params
        params.require(:bookmark).permit(:folder_id, :name, :url, :notes)
    end

end
