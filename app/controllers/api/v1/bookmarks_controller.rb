class Api::V1::BookmarksController < ApplicationController

    before_action :set_folder

    def index
        @bookmarks = @folder.bookmarks
        render json: @bookmarks
    end

    def all_bookmarks
        @bookmarks = Bookmark.all.order(:name)
        render json @bookmarks
    end

    def show
        @bookmark = @folder.bookmarks.find(id: params[:id])
        render json: @bookmark
    end

    def create
        @bookmark = @folder.bookmarks.new(bookmark_params)
        if @bookmark.save
            render json: @folder
        else
            render json: {error: "Error creating bookmark"}
        end
    end

    def destroy
        bookmark = Bookmark.find(params["id"])
        folder = Folder.find(bookmark.folder_id)
        bookmark.destroy
        render json: folder
    end

    private

    def set_folder
        @folder = Folder.find(params[:folder_id])
    end

    def bookmark_params
        params.require(:bookmark).permit(:folder_id, :name, :url, :notes)
    end

end
