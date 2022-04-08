# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: I think we just generate a migration file from the terminal. After that, we locate the migration file. I'm pretty sure the migration is for the student model, which needs to be indicated. I think "rails magic" is what actually generates the foreign key. We also need to indicate that the foreign key connects the student model to the Cohort model. Afterwards we run a rails db:migrate.

  Researched answer: So in our migration, we can add a line to our Student schema like "belongs_to :cohort" and then migrate it. The foreign key will occur on the student model. An experienced friend of mine explained it to me with something as silly as writing your name on your items. To my understanding, the foreign key on the Student model is the indicator for the Cohort model.





2. Which RESTful routes must always be passed params? Why?

  Your answer: Create, show, edit, update, and destroy must be passed params because they're using a primary key to access and sometimes operate one specific object within the model.

  Researched answer: I was wrong about the create RESTful route having to be passed params. It's just passed arguments for what you're creating. Meanwhile, show, edit, update, and destroy ARE always passed params because we're operating on a single piece of data. To do that, we have to use the find method. After talking to an experienced friend, I discovered we could technically use find to locate any unique piece of data, but the primary key is just the best way of ensuring that the data is completely unique.





3. Name three rails generator commands. What is created by each?

  Your answer: Three rails generator commands are rails generate controller, rails generate migration, rails generate model. Rails generate controller creates a file where we can create restful route methods and the logic we plan to associate with them. Rails generate migration lets us create an update to our schema. Rails generate model is what actually builds the schema.

  Researched answer:
  In the rails generate model come, not only do we have to name our model, but state the columns. These columns will be paired with the expectation of what data type each of these categories accept as arguments. If we forget or want to change any, we can also generate and execute a migration later. Once this command is complete, it creates the schema of the database. Since the model is a sort of class, the name needs to be upper case. In class we learned that it needs to be singular, but with further research, I think it's because plurals are reserved for controller names.

  As far as controller goes, I remember reading something about MVC being a compared to a restaurant, and the controller is what communicates what's in the model to the user in the view. Further still, the controller knows HOW to communicate with the model while the user in the view doesn't have that capability.





4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
The INDEX method would display all of the rows in the database.

action: "POST"   location: /students       
The CREATE method would be passed arguments and save a new object row to the student database.

action: "GET"    location: /students/new
The NEW method would create a new object row like the rows in our database, but won't finalize it unless it's saved.

action: "GET"    location: /students/2  
The SHOW method would display the student with the primary key of 2.

action: "GET"    location: /students/2/edit  
The EDIT method would generate a form to submit changes to the student at primary key 2.

action: "PATCH"  location: /students/2      
The UPDATE method would be passed changes as arguments. The row with the primary key "2" is what the arguments would update.

action: "DELETE" location: /students/2      
The DESTROY method will delete student row with the primary key "2". Fun fact, if the same student were to be recreated, it would be assigned a new primary key and the primary key "2" would be permanently unusable.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

5.1. As a user, I can see my entire to do list.
5.2. As a user, I can click a new task button that displays a form
5.3. As a user, I can create a new task into the form that starts unfinished by default, but accepts a description as an argument. Valid or not, I will be rerouted to the index without the task being created.
5.4. As a user, I can click a task on my index and be shown a page that displays all of the instructions of the task
5.5. As a user, I can click a button that brings me a form to submit changes to a task
5.6. As a user I can submit the form and, if the changes are valid, the displayed information will change. Valid or not, I will be rerouted to the index.
5.7. As a user, I can click a button for each task that sets it to complete.
5.8. As a user, I can delete any task.
5.9. As a user, I can see a list of only my complete tasks.
5.10. As a user, I can see a list of only my incomplete tasks.
