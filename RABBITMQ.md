# RabbitMQ

docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management

default Username and Password: guest

1) **What is Exchange?**
- Exchange receives the message from the Producer and routes them to the queues depending on the rule defined by the exchange type. To receive messages, a queue needs to be bound to at least one exchange. 

2) **Routing Key**
- A key which is used by the Exchange to decide how to route the message to queues. It's like the address for the message.

3) **Binding Key**
- Binding is the link between queue and exchange. 

4) **AMQP**
- Advanced Message Queuing Protocol is the core protocol used by RabbitMQ for messaging.
- npm package: amqplib
- connect('amqp://localhost')

# Types of Exchanges
1) ***Direct Exchange***
- A message goes to the queues whose binding key exactly matches the routing key of the message. 
- If the message routing key does not match to the any of the binding key, the message is discarded.
- If more than one queue is bound to exchange with same binding key, the direct exchange will broadcast the message to all matching queues. 
```javascript
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();

        const exchange = 'mail_exchange';
        const routingKey = 'send_mail';
        const message = {
            to: 'xyz@example.com',
            from: 'abc@example.com',
            subject: 'Hello from RabbitMQ',
            body: 'This is a test email sent via RabbitMQ.'
        };


        await channel.assertExchange(exchange, 'direct', { durable: false });
        await channel.assertQueue('mail_queue', { durable: false });
        
        await channel.bindQueue('mail_queue', exchange, routingKey);
        await channel.sendToQueue('mail_queue', Buffer.from(JSON.stringify(message)));
```

2) ***Topic Exchange***
- 










# exclusive: true 
- This means that this is the temporary queue. Once the connection is closed, then just discard the queue. 

# persistent: true
- This states that even in the case of RabbitMQ server crash, the messages in queue should persist

# Priority Queue
- Consumer will access the messages according to the priority. 
- RabbitMQ does not give the gurantee that it will take the messages as per priority.
- Overhead to write the sorting code as per priority in Consumer.

```javascript   
    let delay = 10000;
    await channel.assertExchange(exchange, "x-delayed-message", {
        arguments: {"x-delayed-type":"direct"},
    });

    channel.publish(exchange, "", Buffer.from(message), {
        headers: {"x-delay": delay}
    })
```