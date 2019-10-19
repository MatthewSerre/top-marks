class Api::V1::BookmarksController < ApplicationController

    def index
        @bookmarks = Bookmark.all
        render json: @bookmarks
    end

    def create
        @bookmark = Bookmark.new(bookmark_params)
        if @bookmark.save
            render json: @bookmark
        else
            render json: {error: "Error creating bookmark"}
        end
    end

    def show
        @bookmark = Bookmark.find(:id)
        render json: @bookmark
    end

    def destroy
        @bookmark = Bookmark.find(:id)
        @bookmark.destroy
        render json: {notice: "Bookmark deleted"}
    end

    private

    def bookmark_params
        params.require(:bookmark).permit(:name, :url, :notes)
    end


end
