# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostsController is inheriting from ApplicationController. It's similar to "extends" in React.
class BlogPostsController < ApplicationController
  def index
    # ---2) Storing all blog posts within the instance variable @posts
    @posts = BlogPost.all
  end

  # ---3) We're creating a method for the show restful route that will display the object of the corresponding primary key.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) We're creating a method for the "new" restful route that displays a form for creates a new post, but doesn't save it to our database because "new" is a get verb and a read CRUD action.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) We're saving a new object to our database, and running it through our blog_post_params private validation method.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) We're routing to a form specific to a blog post via its primary key for editing and later updating.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) We're finding and changing an object in our model granted it's validated by our blog_post_params method
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If @post.destroy fails for whatever reason, it returns us to the post we attempted to delete.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) We're making the methods below private inaccesible from anywhere outside of this class
  private
  def blog_post_params
    # ---10) We're creating strong params and only permitting title and content to be passed as arguments. I think :blog_post is referencing the schema, but I'm not entirely sure.
    params.require(:blog_post).permit(:title, :content)
  end
end
