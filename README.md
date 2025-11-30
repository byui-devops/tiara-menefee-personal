# Git Guide

# Git Guide

This README provides a reference for the most common Git commands and workflows.

---

## Add, Commit, Push, Pull

### Add files

```bash
git add <file>       # stage a specific file
git add .            # stage all changes in current directory
git add -A           # stage all changes 

## Commit Changes

git commit -m "Commit message"    # commit with a message
git commit -am "Commit message"   # stage and commit tracked files


## Push Changes

git push -u origin <branch>   # push branch & set upstream
git push                      # push after upstream is set


#Push Updates

git pull                      # fetch & merge
git pull --rebase             # fetch & rebase 

## Change URL

git remote set-url origin <new-url>

## Stash

git stash push -m "WIP"    # save changes with a message
git stash list             # show saved stashes
git stash apply            # reapply most recent stash
git stash pop              # reapply and remove most recent stash
git stash drop stash@{0}   # delete a specific stash

## Revert & Reset 

git revert <commit>          # safely undo a commit 
git reset --soft HEAD~1      # undo last commit, keep changes staged
git reset --mixed HEAD~1     # undo last commit, keep changes unstaged
git reset --hard HEAD~1      # undo last commit + discard changes 

## History

git log --oneline --graph --decorate --all  # compact history view
git log -p -2                               # last 2 commits & diffs
git diff                                    # unstaged changes
git diff --staged                           # staged changes vs last commit
git diff --name-only                        # show only changed file names
git show <commit-hash>                      # details of a commit


