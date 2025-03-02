#!/bin/bash

# Create directory for favicon files if it doesn't exist
mkdir -p public

# Define colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== MakerGram Job Board Favicon Updater ===${NC}"
echo "This script will help you update the favicon for your MakerGram Job Board."
echo ""

# Ask user for favicon source
echo "Please choose an option:"
echo "1. Use a local image file"
echo "2. Use the MakerGram logo (will be downloaded)"
echo "3. Use a custom URL"
read -p "Enter your choice (1-3): " choice

case $choice in
  1)
    read -p "Enter the path to your image file: " image_path
    if [ ! -f "$image_path" ]; then
      echo "File not found. Exiting."
      exit 1
    fi
    ;;
  2)
    echo "Downloading MakerGram logo..."
    # This is a placeholder URL - replace with actual MakerGram logo URL
    curl -s "https://makergram.com/favicon.ico" -o temp_favicon.ico
    image_path="temp_favicon.ico"
    ;;
  3)
    read -p "Enter the URL of the image: " image_url
    echo "Downloading image from URL..."
    curl -s "$image_url" -o temp_favicon.ico
    image_path="temp_favicon.ico"
    ;;
  *)
    echo "Invalid choice. Exiting."
    exit 1
    ;;
esac

echo "Copying favicon.ico to app directory..."
cp "$image_path" src/app/favicon.ico

echo "Copying favicon.ico to public directory..."
cp "$image_path" public/favicon.ico

# Clean up temporary files
if [ -f "temp_favicon.ico" ]; then
  rm temp_favicon.ico
fi

echo -e "${GREEN}Favicon updated successfully!${NC}"
echo "You may need to clear your browser cache to see the changes."
echo "Restart your development server if it's running."

# Make the script executable
chmod +x update-favicon.sh