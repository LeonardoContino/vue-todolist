console.log("js ok", Vue);
/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni task sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no
Create almeno un task con done: true
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il task viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)
 */

const app = Vue.createApp({
  data() {
    return {
      tasks: [
        {
          text: "fare la spesa",
          done: true
        },
        {
          text: "andare in palestra",
          done: false
        }
      ],
      taskText: ''

    };
  },
  methods: {
    deleteTask(i) {
      this.tasks.splice(i, 1)
    
    },
    addTask(){
      if(this.taskText){
        const newTask = {
          text: this.taskText,
          done: false
        }
        this.tasks.push(newTask);
        this.taskText = '';
        
      }
      
    },
    toggleTask(i){
      this.tasks[i].done = !this.tasks[i].done

    }
    
    
  }
});

app.mount("#root");
