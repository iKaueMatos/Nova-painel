import { GridColDef } from "@mui/x-data-grid";
import { Button, Close, ContainerAdd, Form, H1, Input, Item, Label, Modal } from "./style";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Add(props: Props) {

  // TEST THE API

  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "testme@gmail.com",
  //         phone: "123 456 789",
  //         createdAt: "01.02.2023",
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   },
  // });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add new item
    // mutation.mutate();
    props.setOpen(false)
  };
  return (
    <ContainerAdd>
      <Modal>
        <Close className="close" onClick={() => props.setOpen(false)}>
          X
        </Close>
        <H1>Adicionar novo {props.slug}</H1>
        <Form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <Item>
                <Label>{column.headerName}</Label>
                <Input type={column.type} placeholder={column.field} />
              </Item>
            ))}
          <Button>Enviar</Button>
        </Form>
        </Modal>
    </ContainerAdd>
  );
};
