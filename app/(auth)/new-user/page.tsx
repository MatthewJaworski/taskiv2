

const CreateUserWhenNotMatch = async () => {

};

const NewUserPage = async () => {
  await CreateUserWhenNotMatch();

  return (
    <section>
      <h1 className="text-white">Loading...</h1>
    </section>
  );
};

export default NewUserPage;
