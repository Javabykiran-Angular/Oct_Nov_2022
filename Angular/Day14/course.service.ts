export class CourseService{

    private course:string[]=['Core Java','Advanced Java','Spring Boot','Hibernate','JSP','Angular 12','Jenkings','AWS','Docker'];

    getCourse(){
        return (this.course);
    }

}