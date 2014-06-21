var SimpleListModel = function(items) {

    self = this;
    self.items = ko.observableArray(items);
    self.itemToAdd = ko.observable("");
    self.count = ko.observable(items.length);
    self.saveButton = ko.observable('Save New Task');
    self.objectTitle = ko.observable('New Task');
    self.indexItem = ko.observable();
    self.flag = ko.observable(true);
    self.element = ko.observable();
    var q, q2, vv;
    
    self.addItem = function() {
        self.element(this);
        if(self.flag()==true){
            if (self.itemToAdd() != "") {
               console.log("flag=true");
               console.log(self.flag());
               var now1 = new Date();
               var now = now1.getDate() + '/' + now1.getMonth() + '/' + now1.getFullYear();
               self.items.push({title: self.itemToAdd(), added: now});
               self.itemToAdd("");
               self.count(items.length);
               document.getElementById("list").dataset.pagePosition = "viewport";
               document.getElementById("add-view").dataset.pagePosition = "right";
               console.log("Se ha añadido correctamente");
               self.objectTitle('New Task');
               self.itemToAdd("");
            }
        }else{
            self.edit();
        }
    }.bind(this);

    self.close = function(){
        self.objectTitle('New Task');
        document.getElementById("list").dataset.pagePosition = "viewport";
        document.getElementById("add-view").dataset.pagePosition = "right";
        self.flag(true);
        self.saveButton('Save New Task');
        self.itemToAdd("");
    }

    self.checkTask = function(){
        vv = this;
        q = this.title;
        q2 = this.added;
        self.element(this);
        self.flag(false);

        self.indexItem(self.items.indexOf(this));
        self.objectTitle(this.title);
        document.getElementById("list").dataset.pagePosition = "left";
        document.getElementById("add-view").dataset.pagePosition = "viewport";
        self.saveButton('Edit Task');
        self.itemToAdd(this.title);
           
    }

    self.edit = function(){
        console.log(q);
        console.log(q2);
        var y = self.indexItem();
        console.log(y);
        self.items.splice(y,1);
        console.log(self.items());
        var now1 = new Date();
       var now = now1.getDate() + '/' + now1.getMonth() + '/' + now1.getFullYear();
       self.items.push({title: self.itemToAdd(), added: now});
       self.itemToAdd("");
       self.count(items.length);
       document.getElementById("list").dataset.pagePosition = "viewport";
       document.getElementById("add-view").dataset.pagePosition = "right";
    }

    self.removeTask = function (){
        var y = self.items.indexOf(this);
        self.items.splice(y,1);
        console.log("ha funcionado");
        self.saveButton('Save New Task');
        self.itemToAdd("");
        
    }


};
 
ko.applyBindings(new SimpleListModel([
        { title: "Obj1", added: "10/01/2014" },
        { title: "Obj2", added: "13/11/2014" },
        { title: "Obj3", added: "12/09/2014" }
    ]));

    document.getElementById("add-btn").addEventListener("click", function(){
        document.getElementById("list").dataset.pagePosition = "left";
        document.getElementById("add-view").dataset.pagePosition = "viewport";
    });


