export const getColor = (type: string) => {
    switch(type){
        case 'Grass':
            return '#4CAF50';
        case 'Fire':
            return '#F44336';
        case 'Water':
            return '#2196F3';   
        case 'Normal':
            return '#8D6E63'; 
        case 'Electric':
            return '#FFC107'; 
        case 'Ice':
            return '#FF00E5FF';     
        case 'Poison':
            return '#9C27B0';
        case 'Fighting':
            return '#FF9800';
        case 'Ground':
            return '#FFB74D';  
        case 'Flying':
            return '#9FA8DA';
        case 'Psychic':
            return '#E91E63';
        case 'Bug':
            return '#8BC34A';
        case 'Rock':
            return '#9E9E9E';
        case 'Ghost':
            return '#5C6BC0';
        case 'Dark':
            return '#795548';
        case 'Dragon':
            return '#283593';
        case 'Steel':
            return '#607D8B';
        case 'Fairy':
            return '#FF4081';
        default:
            return 'black';
    }
}