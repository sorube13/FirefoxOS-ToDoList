var SimpleListModel = function(items) {

    self = this;
    self.items = ko.observableArray(items);
    self.itemToAdd = ko.observable("");
    self.count = ko.observable(items.length);
    self.saveButton = ko.observable('Save New Task');
    self.objectTitle = ko.observable('New Task');
    self.indexItem = ko.observable();
    //var flag2=true;
    
    self.addItem = function() {
        if (self.itemToAdd() != "") {
           // if(flag2){
           console.log("flag=true");
           var now1 = new Date();
           var now = now1.getDate() + '/' + now1.getMonth() + '/' + now1.getFullYear();
           self.items.push({title: self.itemToAdd(), added: now});
           self.itemToAdd("");
           self.count(items.length);
           document.getElementById("list").dataset.pagePosition = "viewport";
           document.getElementById("add-view").dataset.pagePosition = "right";
           console.log("Se ha añadido correctamente");
           self.objectTitle('New Task');
        }
           /*if(!flag2){
                console.log("flag=false");//editar
                console.log(flag2);
                var now1 = new Date();
                var now = now1.getDate() + '/' + now1.getMonth() + '/' + now1.getFullYear();
                self.items.splice(self.indexItem,1,{title: self.itemToAdd(), added: now});
                document.getElementById("list").dataset.pagePosition = "viewport";
                document.getElementById("add-view").dataset.pagePosition = "right";
                console.log("Se ha editado correctamente");
                self.itemToAdd("");
                self.objectTitle('New Task');
                self.saveButton('Save New Task');
               // self.flag(true);
            }*/
            

    }.bind(this);

    self.close = function(){
        self.objectTitle('New Task');
        document.getElementById("list").dataset.pagePosition = "viewport";
        document.getElementById("add-view").dataset.pagePosition = "right";
       // self.flag(true);
        self.saveButton('Save New Task');
        self.itemToAdd("");
    }

    self.checkTask = function(){
        //self.flag(false);
        self.indexItem(self.items.indexOf(this));
        self.objectTitle(this.title);
        document.getElementById("list").dataset.pagePosition = "left";
        document.getElementById("add-view").dataset.pagePosition = "viewport";
        self.saveButton('Edit Task');
        self.itemToAdd(this.title);
           
    }

    self.removeTask = function (){
        //self.flag(true);
        var y = self.items.indexOf(this);
        self.items.splice(y,1);
        console.log("ha funcionado");
        self.saveButton('Save New Task');
        
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


