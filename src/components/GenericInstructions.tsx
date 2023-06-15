import "../styles/instructions.css";

export const GenericInstructions = () => {
  return (
    <div className="centralized">
      <ul className="pi instructions ">
        <li>
          Warm up: Before beginning your gym workout, it's important to properly
          warm up your body to prevent injury. A good warm-up should include
          some light cardio ( like jogging or cycling) and dynamic stretches
          (like leg swings or arm circles) to get your heart rate up and your
          muscles ready for the workout.
        </li>
        <li>
          Plan your workout: Decide which exercises you want to do and in what
          order. You can focus on a specific muscle group or do a full-body
          workout. You can use machines, free weights, or bodyweight exercises
          to target different areas of the body.
        </li>
        <li>
          Consider the number of sets and repetitions you want to do for each
          exercise. Use proper form: Proper form is crucial to prevent injury
          and ensure that you're targeting the intended muscle group.
        </li>
        <li>
          If you're unsure how to perform an exercise correctly, ask a trainer
          for assistance. Start with lighter weights and gradually increase the
          weight as your form improves.
        </li>
      </ul>
    </div>
  );
};

export default GenericInstructions;
