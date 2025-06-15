# Challanges faced
I was getting following error while pushing changes to git via command line.

```markdown
remote: Permission to mohibulhasan/React-FrontEnd-Learning.git denied to mohib-dbs.
```
The above error shows that the user who is trying to commit is "mohib-dbs" which was my other github username. I had used it before for another repository. But that was in different folder. I was wandering what might be the issue. 

Then I took AI(Copilot)'s help, it suggests me to clear stored credentials(https) by using below command:

```
git config --global --unset credential.
git credential reject
```
After the second command git prompted for more input, and I had to use the following:

```
protocol=https
host=github.com
```

Now tried to push again with the command ```git push origin main``` but, Git will ask for your GitHub username and a personal access token (GitHub no longer accepts plain passwords over HTTPS). You can generate a token at https://github.com/settings/tokens — make sure to give it appropriate scopes like ```repo```.


