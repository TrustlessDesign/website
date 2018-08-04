if npm run build; then
  printf 'Build successful.\n'
  if rm -rf ../gh-pages-website/*; then
    if cp -Rf dist/* ../gh-pages-website; then
      cd ../gh-pages-website
      git add .
      git commit -m 'Changes'
      if git push origin gh-pages; then
        printf 'Finished!\n'
      fi
    fi
  else
    printf 'Cant remove directory.\n'
  fi
else
  printf 'Build failed.\n'
fi
