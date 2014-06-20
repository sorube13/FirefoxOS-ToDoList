var SimpleListModel = function(items) {

    self = this;
    self.items = ko.observableArray(items);
    self.itemToAdd = ko.observable("");
    self.count = ko.observable(items.length);
    self.doneTasks = ko.observableArray([]);


    self.addItem = function() {
        if (self.itemToAdd() != "") {
            var now1 = new Date();
            var now = now1.getDate() + '/' + now1.getMonth() + '/' + now1.getFullYear();
            self.items.push({title: self.itemToAdd(), added: now});
            self.itemToAdd("");
            self.count(items.length);
            document.getElementById("list").dataset.pagePosition = "viewport";
            document.getElementById("add-view").dataset.pagePosition = "right";
            console.log("Se ha añadido correctamente");
        }      
    }.bind(this);

    self.close = function(){
        document.getElementById("list").dataset.pagePosition = "viewport";
        document.getElementById("add-view").dataset.pagePosition = "right";

    }

    self.checkTask = function(){
        console.log("checked!");
   
    }

    self.removeTask = function (){
        var y = self.items.indexOf(this);
        self.items.splice(y,1);
        console.log("ha funcionado");
    }

};
 
ko.applyBindings(new SimpleListModel([
        { title: "Probar Firefox OS", added: "10/01/2013" },
        { title: "Escribir en el blog", added: "13/11/2012" },
        { title: "Continuar el desarrollo   ", added: "12/09/2013" }
    ]));

    document.getElementById("add-btn").addEventListener("click", function(){
        document.getElementById("list").dataset.pagePosition = "left";
        document.getElementById("add-view").dataset.pagePosition = "viewport";
    });


