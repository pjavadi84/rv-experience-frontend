Welcom to RV-Experience:

This is what all the actions will take place. The purpose of creating this front end experience is for users to create the list of companies, and also create their associated RVs. When you open the page, you will see all the list of companies (first fetch). You can also add a new company record(second fetch) and of course you can delete a company record on the page(third fetch) and upon refresh, you see the updated list of companies. 

Is there a forth fetch? Yes, and that you can generate new RV records, and on fifth fetch, when you click "show rvs", you can see the list of RVs. 



How to test it?

**Please note that this is just the front end project. you need to also clone the backend and run a local server to experience this project:**

Step 1: clone the copy of this project in your desired folder
Step 2: clone the backend project, if you haven't done so. If you have not then follow below step:
     2a) once you clone, open up the backend project and run bundle install to add all dependencies and gems.
     2b) run rails db:migrate to migrate all the database. 
     2c) run rails db:seed to seed file data. 
step 3: on your BACKEND TERMINAL THAT YOU JUST CLONED ON STEP 2, type "rails server", and it will spin up the server
    3a) you are running the server. Yaaay!!!

and finally: 

step 4: on your FRONTEND's terminal, find the index.html and open it in the browser. 

Now you are ready to experience this very basic fullstack application:


**Why I made this:**
one of the most important required project studying at Flatiron. 

**What did I learn and you might learn as well:**
I truly learned how backend and frontend really work together in create a very interacive experience. Although there are much work needed in this project, I truly feel that I learned quiet a lot about JavaScript, and how it can manipulate and create all the magics right in front of user's eyes, but also how Rails on the other side handles the logic of where all these data all being stored, controlled, and routed. 

***STRETCH GOALS***
1) Building full CRUD that also include edit and delete
2) Building a user authenticaion using JWT, OAuth, or Omniauth
3) Building more models, such as users, in which the facilitation of associated data from company to user become possible. This logic is more geared toward users who want to rent RVs of the specific company they are looking at. 


I hope you enjoy this project as much as I do, and even contribute and find bugs that can help make this app a great app to use, for yourself, for us, and others!

Thank you


